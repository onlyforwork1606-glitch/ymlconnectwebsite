Deploy the present application usinf cloudfare 

1. Deploy first using C3 CLI 
2. Deploy the same application using Git integration
2025-12-24T05:03:16.132Z	Initializing build environment...
2025-12-24T05:03:18.686Z	Success: Finished initializing build environment
2025-12-24T05:03:19.098Z	Cloning repository...
2025-12-24T05:03:20.458Z	Restoring from dependencies cache
2025-12-24T05:03:20.460Z	Restoring from build output cache
2025-12-24T05:03:20.463Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-12-24T05:03:20.746Z	Installing project dependencies: npm clean-install --progress=false
2025-12-24T05:03:28.068Z	
2025-12-24T05:03:28.069Z	added 198 packages, and audited 199 packages in 7s
2025-12-24T05:03:28.069Z	
2025-12-24T05:03:28.069Z	43 packages are looking for funding
2025-12-24T05:03:28.069Z	  run `npm fund` for details
2025-12-24T05:03:28.069Z	
2025-12-24T05:03:28.069Z	found 0 vulnerabilities
2025-12-24T05:03:28.373Z	Executing user build command: npm run build
2025-12-24T05:03:30.610Z	
2025-12-24T05:03:30.610Z	> shoppingapplication@0.0.0 build
2025-12-24T05:03:30.610Z	> vite build
2025-12-24T05:03:30.610Z	
2025-12-24T05:03:31.023Z	vite v7.3.0 building client environment for production...
2025-12-24T05:03:31.100Z	transforming...
2025-12-24T05:03:32.246Z	✓ 32 modules transformed.
2025-12-24T05:03:32.439Z	rendering chunks...
2025-12-24T05:03:32.449Z	computing gzip size...
2025-12-24T05:03:32.463Z	dist/index.html                   0.46 kB │ gzip:  0.29 kB
2025-12-24T05:03:32.464Z	dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
2025-12-24T05:03:32.464Z	dist/assets/index-COcDBgFa.css    1.38 kB │ gzip:  0.70 kB
2025-12-24T05:03:32.464Z	dist/assets/index-BaBB40Qq.js   193.91 kB │ gzip: 60.94 kB
2025-12-24T05:03:32.464Z	✓ built in 1.40s
2025-12-24T05:03:32.499Z	Success: Build command completed
2025-12-24T05:03:32.642Z	Executing user deploy command: npx wrangler pages  deploy
2025-12-24T05:03:34.342Z	
