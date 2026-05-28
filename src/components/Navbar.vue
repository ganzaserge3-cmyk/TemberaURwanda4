<template>
    <nav class="bg-green-800 px-8 py-2 text-white">
        <div class="mx-auto flex max-w-6xl items-center justify-between">
        <img src="../assets/ganza ivan.png " alt="logo" class="w-15 h-11">

        
            <ul class="flex gap-8 text-sm font-medium">
                <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
                <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
                <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>

                <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Gallery<span> v</span></a>
                <ul class="invisible group-hover:visible opacity-0  group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                <li><RouterLink to="/gallery/photos" class="block px-4 py-2 hover:bg-green-300 text-green-900">Photos</RouterLink></li>
                <li><RouterLink to="/gallery/videos" class="block px-4 py-2 hover:bg-green-300 text-green-900">Videos</RouterLink></li>
                </ul>
                </li>
                <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Destination<span> v</span></a>
                <ul class="invisible group-hover:visible opacity-0  group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                <li><RouterLink to="/destinations/northern-province" class="block px-4 py-2 hover:bg-green-300 text-green-900">Northern Province</RouterLink></li>
                <li><RouterLink to="/destinations/southern-province" class="block px-4 py-2 hover:bg-green-300 text-green-900">Southern Province</RouterLink></li>
                <li><RouterLink to="/destinations/eastern-province" class="block px-4 py-2 hover:bg-green-300 text-green-900">Eastern Province</RouterLink></li>
                <li><RouterLink to="/destinations/western-province" class="block px-4 py-2 hover:bg-green-300 text-green-900">Western Province</RouterLink></li>
                <li><RouterLink to="/destinations/kigali-city" class="block px-4 py-2 hover:bg-green-300 text-green-900">Kigali</RouterLink></li>
                </ul>
                </li>
                <li><RouterLink to="/contact" class="hover:text-yellow-300">Contact</RouterLink></li>
            </ul>
        </div>
    
    </nav>
</template>      
