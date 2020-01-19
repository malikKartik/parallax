// install service worker
self.addEventListener('install',event=>{
    console.log('service worker has been installed')
})

// activate event
self.addEventListener('activate',evt=>{
    console.log('service worker has been activated')
})

// fetch request
self.addEventListener('fetch', evt=>{
    // console.log('fetch event',evt)
})