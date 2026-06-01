'use client';
import { useEffect, useRef } from 'react';
import {slugMap} from'@/src/utils/globalSlug';
import { FAQItem } from '@/src/utils/faqExtractor'; 
interface SingleBlogPostProps {
  content: string;
  postSlug?: string;

}

export function SingleBlogPost({ content, postSlug }: SingleBlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const processImages = () => {
      const container = contentRef.current;
      if (!container) return;

      // SEO + UX baseline: lazy load, async decode, alt text, explicit width/height
      // (prevents CLS — Core Web Vitals SEO factor) and a smart natural-size sizer
      // so small images don't get upscaled to blur on wide containers.
      const SMALL_THRESHOLD = 500; // px — images smaller than this won't be stretched
      const LARGE_MAX_WIDTH = 900; // px — cap for very wide images so they don't dominate

      const applyNaturalSizing = (img: HTMLImageElement, figure?: HTMLElement) => {
        const apply = () => {
          const nw = img.naturalWidth;
          const nh = img.naturalHeight;
          if (!nw || !nh) return;

          // Lock in dimensions to prevent layout shift
          if (!img.getAttribute('width')) img.setAttribute('width', String(nw));
          if (!img.getAttribute('height')) img.setAttribute('height', String(nh));

          if (nw < SMALL_THRESHOLD) {
            // Small image: display at natural size, centered. No upscale → no blur.
            img.style.width = 'auto';
            img.style.maxWidth = `${nw}px`;
            img.classList.add('mx-auto', 'block');
            if (figure) {
              figure.style.maxWidth = `${nw}px`;
              figure.classList.add('mx-auto');
              figure.classList.remove('shadow-xl');
              figure.classList.add('shadow-md');
            }
          } else {
            // Large image: fill container up to a sensible cap, keep aspect ratio
            img.style.maxWidth = `${LARGE_MAX_WIDTH}px`;
            img.style.width = '100%';
            img.classList.add('mx-auto', 'block');
            if (figure) {
              figure.style.maxWidth = `${LARGE_MAX_WIDTH}px`;
              figure.classList.add('mx-auto');
            }
          }
        };
        if (img.complete && img.naturalWidth) apply();
        else img.addEventListener('load', apply, { once: true });
      };

      const setBaseAttrs = (img: HTMLImageElement) => {
        img.loading = 'lazy';
        img.decoding = 'async';
        if (!img.alt || img.alt.trim() === '') {
          img.alt = 'Nexus Clinic treatment image';
        }
      };

      // Handle VC Row sections (grid layouts) — uniform card sizing is desired here
      const sections = container.querySelectorAll('.vc_row');

      sections.forEach(section => {
        const columns = section.querySelectorAll('.wpb_column');

        if (columns.length > 1) {
          const row = section.querySelector('.row');

          if (row) {
            row.classList.add(
              'grid',
              'grid-cols-2',
              'md:grid-cols-3',
              'lg:grid-cols-6',
              'gap-3',
              'md:gap-4',
              'my-6',
              'md:my-8'
            );
          }

          columns.forEach((column, index) => {
            column.classList.add(
              'flex',
              'flex-col',
              'items-center',
              'text-center',
              'p-1',
              'md:p-2'
            );

            const img = column.querySelector('img') as HTMLImageElement | null;
            const figure = column.querySelector('figure') as HTMLElement | null;
            const heading = column.querySelector('.ld-fancy-heading');

            if (img) {
              img.classList.add(
                'w-full',
                'h-[120px]',
                'md:h-[160px]',
                'lg:h-[180px]',
                'object-cover',
                'object-center',
                'rounded-xl',
                'shadow-md',
                'transition-all',
                'duration-300',
                'hover:shadow-xl',
                'hover:scale-105'
              );
              setBaseAttrs(img);
              // Lock dims for CLS even in grid view
              const lockDims = () => {
                if (img.naturalWidth && !img.getAttribute('width')) {
                  img.setAttribute('width', String(img.naturalWidth));
                  img.setAttribute('height', String(img.naturalHeight));
                }
              };
              if (img.complete) lockDims();
              else img.addEventListener('load', lockDims, { once: true });
            }

            if (figure) {
              figure.classList.add(
                'my-2',
                'relative',
                'rounded-xl',
                'overflow-hidden',
                'shadow-md',
                'w-full'
              );
            }

            if (heading) {
              heading.classList.add(
                'text-center',
                'mt-2',
                'text-brown',
                'font-medium',
                'w-full'
              );

              const words = heading.querySelectorAll('.split-unit');
              words.forEach(word => {
                word.classList.add(
                  'inline-block',
                  'text-xs',
                  'md:text-sm',
                  'text-[#8c4f58]',
                  'mx-0.5',
                  'font-semibold'
                );
              });
            }

            (column as HTMLElement).style.animationDelay = `${index * 0.1}s`;
            column.classList.add('opacity-0', 'animate-fadeInUp');
          });
        }
      });

      // Handle standalone images (not in vc_row)
      const standaloneImages = container.querySelectorAll('img:not(.vc_row img)');
      if (standaloneImages.length === 0) return;

      const imagesArray = Array.from(standaloneImages) as HTMLImageElement[];

      // Group consecutive standalone images sharing the same parent
      const imageGroups: HTMLImageElement[][] = [];
      let currentGroup: HTMLImageElement[] = [];
      let lastParent: Element | null = null;

      imagesArray.forEach((img) => {
        const currentParent = img.parentElement;

        if (currentParent !== lastParent || currentGroup.length >= 2) {
          if (currentGroup.length > 0) {
            imageGroups.push([...currentGroup]);
          }
          currentGroup = [img];
          lastParent = currentParent;
        } else {
          currentGroup.push(img);
        }
      });

      if (currentGroup.length > 0) {
        imageGroups.push(currentGroup);
      }

      imageGroups.forEach((group) => {
        if (group.length === 1) {
          const img = group[0];
          setBaseAttrs(img);
          img.classList.add(
            'max-w-full',
            'h-auto',
            'block',
            'rounded-2xl',
            'shadow-lg',
            'transition-transform',
            'duration-500',
            'hover:scale-[1.02]'
          );

          let figure: HTMLElement;
          if (img.parentElement?.tagName === 'FIGURE') {
            figure = img.parentElement as HTMLElement;
            figure.className =
              'my-6 md:my-8 relative rounded-2xl overflow-hidden shadow-lg max-w-full';
          } else {
            figure = document.createElement('figure');
            figure.className =
              'my-6 md:my-8 relative rounded-2xl overflow-hidden shadow-lg max-w-full';

            if (img.parentNode) {
              img.parentNode.insertBefore(figure, img);
              figure.appendChild(img);
            }
          }

          applyNaturalSizing(img, figure);
        } else {
          // Multi-image gallery — adaptive grid based on count
          const firstImg = group[0];
          const parentNode = firstImg.parentNode;

          const cols =
            group.length === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : group.length === 3
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

          const galleryContainer = document.createElement('div');
          galleryContainer.className = `grid ${cols} gap-3 md:gap-4 my-6 md:my-8`;

          group.forEach((img, index) => {
            setBaseAttrs(img);
            img.classList.add(
              'w-full',
              'h-auto',
              'max-h-[260px]',
              'md:max-h-[300px]',
              'object-contain',
              'bg-cream/40',
              'rounded-xl',
              'shadow-md',
              'transition-transform',
              'duration-500',
              'hover:scale-[1.03]'
            );
            // Lock dims for CLS
            const lockDims = () => {
              if (img.naturalWidth && !img.getAttribute('width')) {
                img.setAttribute('width', String(img.naturalWidth));
                img.setAttribute('height', String(img.naturalHeight));
              }
            };
            if (img.complete) lockDims();
            else img.addEventListener('load', lockDims, { once: true });

            let figure: HTMLElement;
            if (img.parentElement?.tagName === 'FIGURE') {
              figure = img.parentElement as HTMLElement;
              figure.className =
                'relative overflow-hidden rounded-xl group h-full flex items-center justify-center bg-cream/30';
            } else {
              figure = document.createElement('figure');
              figure.className =
                'relative overflow-hidden rounded-xl group h-full flex items-center justify-center bg-cream/30';

              if (img.parentNode) {
                img.parentNode.insertBefore(figure, img);
                figure.appendChild(img);
              }
            }

            (figure as HTMLElement).style.animationDelay = `${index * 0.15}s`;
            figure.classList.add('opacity-0', 'animate-fadeInUp');

            if (img.alt && !figure.querySelector('figcaption')) {
              const figcaption = document.createElement('figcaption');
              figcaption.className =
                'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-2 md:p-3 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300';
              figcaption.textContent = img.alt;
              figure.appendChild(figcaption);
            }

            galleryContainer.appendChild(figure);
          });

          if (parentNode && firstImg.parentNode) {
            parentNode.insertBefore(galleryContainer, firstImg);

            group.forEach((img) => {
              if (img.parentNode) {
                img.parentNode.removeChild(img);
              }
            });
          }
        }
      });
    };

    const addAnimationStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `;
      document.head.appendChild(style);
    };

    const processHeadings = () => {
      const headings = contentRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6');
      if (!headings) return;

      headings.forEach(heading => {
        const text = heading.textContent || '';
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;

        const level = parseInt(heading.tagName[1]);

        heading.className = '';

        const baseClasses = 'font-georgia font-bold scroll-mt-24 text-wine';

        const addDecoration = (h: Element, size: 'sm' | 'md' | 'lg') => {
          if (h.querySelector('.heading-decoration')) return;
          const decoration = document.createElement('span');
          const sizeClass =
            size === 'lg'
              ? 'h-6 md:h-9 lg:h-10'
              : size === 'md'
              ? 'h-5 md:h-7 lg:h-8'
              : 'h-4 md:h-5 lg:h-6';
          decoration.className = `heading-decoration absolute left-0 top-1/2 w-1 ${sizeClass} bg-rose rounded-full transform -translate-y-1/2`;
          decoration.setAttribute('aria-hidden', 'true');
          h.appendChild(decoration);
        };

        switch(level) {
          case 1:
            heading.classList.add(...baseClasses.split(' '), 'text-2xl', 'md:text-4xl', 'lg:text-5xl', 'mt-8', 'md:mt-12', 'mb-4', 'md:mb-6', 'relative', 'pl-5', 'md:pl-6', 'leading-tight');
            addDecoration(heading, 'lg');
            break;
          case 2:
            heading.classList.add(...baseClasses.split(' '), 'text-xl', 'md:text-3xl', 'lg:text-4xl', 'mt-7', 'md:mt-10', 'mb-3', 'md:mb-4', 'relative', 'pl-5', 'md:pl-6', 'leading-tight');
            addDecoration(heading, 'md');
            break;
          case 3:
            heading.classList.add(...baseClasses.split(' '), 'text-lg', 'md:text-2xl', 'lg:text-3xl', 'mt-6', 'md:mt-8', 'mb-2', 'md:mb-3', 'relative', 'pl-4', 'md:pl-5', 'leading-snug');
            addDecoration(heading, 'sm');
            break;
          case 4:
            heading.classList.add(...baseClasses.split(' '), 'text-base', 'md:text-xl', 'lg:text-2xl', 'mt-5', 'md:mt-6', 'mb-2', 'leading-snug');
            break;
          case 5:
            heading.classList.add(...baseClasses.split(' '), 'text-sm', 'md:text-lg', 'lg:text-xl', 'mt-4', 'md:mt-5', 'mb-2', 'leading-snug');
            break;
          default:
            heading.classList.add(...baseClasses.split(' '), 'text-xs', 'md:text-base', 'lg:text-lg', 'mt-3', 'md:mt-4', 'mb-2', 'leading-snug', 'uppercase', 'tracking-wide');
        }
      });
    };

    const processTables = () => {
      const tables = contentRef.current?.querySelectorAll('table');
      if (!tables) return;

      tables.forEach((table) => {
        if (table.dataset.styled === 'true') return;
        table.dataset.styled = 'true';

        const parent = table.parentNode;
        if (!parent) return;

        // Extract headers and data rows before mutating the table
        const thead = table.querySelector('thead');
        let headerCells: Element[] = [];
        let dataRows: HTMLTableRowElement[] = [];

        if (thead) {
          headerCells = Array.from(thead.querySelectorAll('th, td'));
          const tbody = table.querySelector('tbody');
          dataRows = Array.from(
            (tbody || table).querySelectorAll('tr')
          ).filter((tr) => !thead.contains(tr));
        } else {
          const allRows = Array.from(table.querySelectorAll('tr'));
          if (allRows.length > 0) {
            headerCells = Array.from(allRows[0].querySelectorAll('th, td'));
            dataRows = allRows.slice(1);
          }
        }

        const headers = headerCells.map((c) => (c.textContent || '').trim());

        // Outer wrapper containing both desktop table + mobile cards
        const wrapper = document.createElement('div');
        wrapper.className = 'max-w-6xl mx-auto my-10';
        parent.insertBefore(wrapper, table);

        // ---- Desktop: table view ----
        const desktopContainer = document.createElement('div');
        desktopContainer.className =
          'hidden md:block overflow-x-auto bg-cream rounded-xl shadow-md border border-taupe/10';
        wrapper.appendChild(desktopContainer);
        desktopContainer.appendChild(table);

        table.classList.add(
          'w-full',
          'border-collapse',
          'min-w-[600px]',
          'font-inter'
        );
        table.setAttribute('role', 'table');

        if (thead) {
          thead.classList.add('bg-wine', 'text-light');
          thead.querySelectorAll('tr').forEach((tr) => {
            tr.classList.add('border-b', 'border-wine');
          });
          thead.querySelectorAll('th, td').forEach((th) => {
            th.classList.add(
              'p-4',
              'text-left',
              'font-georgia',
              'font-semibold',
              'text-sm',
              'md:text-base',
              'tracking-wide',
              'text-light'
            );
          });
        } else {
          const firstRow = table.querySelector('tr');
          if (firstRow) {
            firstRow.classList.add('bg-wine', 'text-light');
            firstRow.querySelectorAll('td, th').forEach((cell) => {
              cell.classList.add(
                'p-4',
                'text-left',
                'font-georgia',
                'font-semibold',
                'text-sm',
                'md:text-base',
                'tracking-wide',
                'text-light'
              );
            });
          }
        }

        dataRows.forEach((tr, idx) => {
          tr.classList.add(
            'border-t',
            'border-taupe/15',
            'hover:bg-rose/5',
            'transition-colors',
            'duration-200'
          );
          if (idx % 2 === 1) {
            tr.classList.add('bg-cream/40');
          }
          tr.querySelectorAll('td, th').forEach((cell, cellIdx) => {
            cell.classList.add(
              'p-4',
              'font-inter',
              'text-sm',
              'md:text-base',
              'align-top',
              'leading-relaxed'
            );
            if (cellIdx === 0) {
              cell.classList.add('font-semibold', 'text-brown');
            } else {
              cell.classList.add('text-brown/80');
            }
            cell.querySelectorAll('strong, b').forEach((bold) => {
              bold.classList.add('text-wine', 'font-semibold');
            });
          });
        });

        // ---- Mobile: card view (mirrors TableForPages) ----
        const mobileContainer = document.createElement('div');
        mobileContainer.className = 'md:hidden space-y-4';
        wrapper.appendChild(mobileContainer);

        dataRows.forEach((tr) => {
          const cells = Array.from(tr.querySelectorAll('td, th'));
          if (cells.length === 0) return;

          const card = document.createElement('div');
          card.className =
            'bg-cream rounded-xl border border-taupe/20 overflow-hidden shadow-md';

          const cardInner = document.createElement('div');
          cardInner.className = 'p-4';
          card.appendChild(cardInner);

          // Primary section: first column highlighted
          const primaryHeader = headers[0] || '';
          const primaryCell = cells[0];

          const primaryWrap = document.createElement('div');
          primaryWrap.className = 'flex-1';

          const primaryLabelRow = document.createElement('div');
          primaryLabelRow.className = 'flex items-center gap-2 mb-2';
          primaryLabelRow.innerHTML = `
            <div class="w-1 h-5 bg-wine rounded-full"></div>
            <p class="font-inter text-xs text-taupe uppercase tracking-wide">${primaryHeader}</p>
          `;
          primaryWrap.appendChild(primaryLabelRow);

          const primaryValue = document.createElement('p');
          primaryValue.className =
            'font-georgia text-brown font-semibold text-base leading-snug';
          primaryValue.innerHTML = primaryCell.innerHTML;
          primaryValue.querySelectorAll('strong, b').forEach((bold) => {
            bold.classList.add('text-wine', 'font-semibold');
          });
          primaryWrap.appendChild(primaryValue);

          cardInner.appendChild(primaryWrap);

          // Secondary fields: remaining columns as label/value pairs
          if (cells.length > 1) {
            const fieldList = document.createElement('div');
            fieldList.className = 'mt-3 space-y-2';

            cells.slice(1).forEach((cell, sIdx) => {
              const colHeader = headers[sIdx + 1] || '';
              const fieldRow = document.createElement('div');
              fieldRow.className =
                'grid grid-cols-[140px_1fr] gap-3 border-b border-taupe/10 pb-2 last:border-b-0';

              const labelEl = document.createElement('span');
              labelEl.className = 'font-inter text-xs text-taupe uppercase tracking-wide';
              labelEl.textContent = colHeader;

              const valueEl = document.createElement('span');
              valueEl.className = 'font-inter text-sm text-brown font-medium leading-relaxed';
              valueEl.innerHTML = cell.innerHTML;
              valueEl.querySelectorAll('strong, b').forEach((bold) => {
                bold.classList.add('text-wine', 'font-semibold');
              });

              fieldRow.appendChild(labelEl);
              fieldRow.appendChild(valueEl);
              fieldList.appendChild(fieldRow);
            });

            cardInner.appendChild(fieldList);
          }

          mobileContainer.appendChild(card);
        });
      });
    };

    const processStrongTags = () => {
      const strongs = contentRef.current?.querySelectorAll('strong, b');
      if (!strongs) return;
      strongs.forEach((s) => {
        // Skip if it's inside a heading (heading already wine-colored)
        if (s.closest('h1, h2, h3, h4, h5, h6')) return;
        s.classList.add('text-wine', 'font-semibold');
      });
    };

    const processFancyHeadings = () => {
      const fancyHeadings = contentRef.current?.querySelectorAll('.ld-fancy-heading');
      
      fancyHeadings?.forEach(heading => {
        heading.classList.add(
          'text-center',
          'mt-2',
          'mb-4',
          'text-brown',
          'font-medium'
        );
        
        const words = heading.querySelectorAll('.split-unit');
        words.forEach(word => {
          word.classList.add(
            'inline-block',
            'text-sm',
            'md:text-base',
            'text-[#8c4f58]',
            'mx-0.5'
          );
        });
      });
    };

    const processLists = () => {
      const lists = contentRef.current?.querySelectorAll('ul, ol');
      if (!lists) return;
      
      lists.forEach(list => {
        const parentElement = list.parentElement;
        const isAlreadyStyled = parentElement?.classList.contains('list-container');
        
        if (!isAlreadyStyled && list.tagName === 'UL') {
          const container = document.createElement('div');
          container.className = 'list-container my-6 bg-cream/30 rounded-xl p-1';
          
          if (list.parentNode) {
            list.parentNode.insertBefore(container, list);
            container.appendChild(list);
          }
        }
        
        if (list.tagName === 'UL') {
          list.classList.add('space-y-3');
          
          const items = list.querySelectorAll('li');
          items.forEach((item, index) => {
            if (!item.querySelector('.list-bullet')) {
              const content = item.innerHTML;
              
              const bulletSpan = document.createElement('span');
              bulletSpan.className = 'list-bullet inline-block w-2 h-2 mt-2.5 rounded-full bg-rose flex-shrink-0';
              bulletSpan.setAttribute('aria-hidden', 'true');
              
              const contentSpan = document.createElement('span');
              contentSpan.className = 'flex-1 text-brown/90 leading-relaxed text-[15px] md:text-base lg:text-lg';
              contentSpan.innerHTML = content;
              
              item.innerHTML = '';
              item.className = 'flex items-start gap-3';
              item.appendChild(bulletSpan);
              item.appendChild(contentSpan);
              
              const bold = contentSpan.querySelector('strong, b');
              if (bold) {
                bold.classList.add('text-wine', 'font-semibold');
              }
            }
            
            if (index % 2 === 1) {
              item.classList.add('bg-rose/5', 'p-2', 'rounded-lg');
            }
          });
        } else {
          list.classList.add('space-y-3', 'list-decimal', 'pl-6');
          
          const items = list.querySelectorAll('li');
          items.forEach((item, index) => {
            item.classList.add('text-brown/90', 'leading-relaxed', 'pl-2', 'text-[15px]', 'md:text-base', 'lg:text-lg');
            
            const bold = item.querySelector('strong, b');
            if (bold) {
              bold.classList.add('text-wine', 'font-semibold');
            }
            
            if (index % 2 === 1) {
              item.classList.add('bg-rose/5', 'p-2', 'rounded-lg');
            }
          });
        }
      });
    };

    const processParagraphs = () => {
      const paragraphs = contentRef.current?.querySelectorAll('p');
      if (!paragraphs) return;
      
      paragraphs.forEach((p, index) => {
        if (p.closest('.ld-fancy-heading') || p.closest('.wpb_column')) return;
        
        p.classList.add(
          'text-brown/90',
          'leading-relaxed',
          'text-[15px]',
          'md:text-base',
          'lg:text-lg',
          'mx-auto',
          'my-3',
          'md:my-4'
        );
        
        const links = p.querySelectorAll('a');
        links.forEach(link => {
          link.classList.add(
            'text-wine',
            'hover:text-brown',
            'underline',
            'underline-offset-4',
            'decoration-2',
            'decoration-rose/30',
            'hover:decoration-rose',
            'transition-all',
            'duration-200',
            'font-medium'
          );
          const href = link.getAttribute('href') || '';
          const isInternal =
            href.includes('nexus-clinic.com') ||
            href.startsWith('/') ||
            href.startsWith('#');
          if (!isInternal) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
        });
        
        if (index === 0 && p.textContent && p.textContent.length > 0) {
          p.classList.add(
            'first-letter:text-5xl',
            'md:first-letter:text-6xl',
            'first-letter:font-serif',
            'first-letter:font-bold',
            'first-letter:text-wine',
            'first-letter:float-left',
            'first-letter:mr-2',
            'md:first-letter:mr-3',
            'first-letter:mt-1',
            'md:first-letter:mt-2',
            'first-letter:leading-none'
          );
        }
      });
    };
    
    addAnimationStyles();
    processImages();
    processHeadings();
    processFancyHeadings();
    processLists();
    processParagraphs();
    processTables();
    processStrongTags();

  const processLinks = () => {
    const container = contentRef.current;
    if (!container) return;

    const links = container.querySelectorAll('a[href]');

    links.forEach((link) => {
      const href = link.getAttribute('href') || '';

      if (href.includes('blog.nexus-clinic.com')) {
        try {
          const url = new URL(href);
          
          // Get the slug (everything after the domain)
          const slug = url.pathname.split('/').filter(Boolean).pop() || '';

          let newHref = '/';

          // If slug matches a treatment page, go there
          if (slugMap[slug]) {
            newHref = slugMap[slug];
          }
          // Otherwise go to homepage
          else {
            newHref = '/';
          }

          link.setAttribute('href', newHref);
          link.removeAttribute('target');
          link.removeAttribute('rel');

        } catch (err) {
          console.log('Link processing error:', err);
        }
      }
    });
  };

  processLinks();
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="single-post max-w-7xl mx-auto px-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}