module.exports = {
	apps: [{
		name: 'ufw-ncdb',
		script: './index.js',

		// Logging configuration
		log_date_format: 'HH:mm:ss.SSS DD.MM.YYYY',
		merge_logs: true,
		log_file: '/var/log/ufw-netcatdb/combined.log',
		out_file: '/var/log/ufw-netcatdb/out.log',
		error_file: '/var/log/ufw-netcatdb/error.log',

		// Application restart policy settings
		wait_ready: true,
		autorestart: true,
		max_restarts: 10,
		min_uptime: 20000,
		restart_delay: 5000,
		exp_backoff_restart_delay: 3000,

		// Environment variables configuration
		env: {
			NODE_ENV: 'production',
		},
	}],
};