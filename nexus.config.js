module.exports = {
  apps: [
    {
      name: "nexus-clinic-malaysia",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",

      instances: 2,
      exec_mode: "cluster",

      autorestart: true,
      watch: false,

      max_memory_restart: "1G",

      node_args: "--max-old-space-size=900",

      env: {
        NODE_ENV: "production"
      }
    }
  ]
};

