<template>
    <div
        class="max-w-screen-2xl px-10 mx-auto min-h-dvh text-center flex flex-col items-center justify-center space-y-8">

        <h1 class="text-6xl">team</h1>
        <!-- <p class="justify-center px-14">Filler text: Our models are handpicked—not just for their looks (though that
            part’s
            covered), but for their
            presence, professionalism, and the way they bring a concept to life. Whether you're shooting a tight-frame
            beauty campaign or a nationwide TVC, we’ve got
        </p> -->

        <section class="flex flex-col md:grid md:grid-cols-2 w-full gap-4 md:gap-14 mb-10">
            <div class="h-[700px] bg-gray-300 col-span-1 relative">
                <img src="@/assets/Images/Team/director.jpg" alt="Nao Kaneko, Director of Talent Oversight" class="object-cover h-full w-full">
                <div
                    class="absolute bottom-0 text-start px-2 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-3xl">
                    <p class="font-bold text-2xl text-white">Nao Kaneko</p>
                    <p class="font-bold  text-white">Director of Talent Oversight</p>
                    <p class="text-white">
                        As a headhunting specialist having worked for Mitsubishi and some of the largest firms in Japan
                        Nao is a perfect fit as our talent director. Nao brings world class expertise to our team being
                        based in the U.A.E. mending business relationships between Tokyo and Dubai.
                    </p>
                </div>
            </div>
            <div class="h-[700px] bg-gray-300 col-span-1 relative">
                <img src="@/assets/Images/Team/director_of_operations.jpg" alt="Grace Lee, Director of Operations"
                    class="object-cover h-full w-full">
                <div
                    class="absolute bottom-0 text-start px-2 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-3xl">
                    <p class="font-bold text-2xl text-white">Grace Lee</p>
                    <p class="font-bold text-white">Director of Operations</p>
                    <p class="text-white">
                        Grace has founded and led several of her own businesses between Korea and Singapore.

                        Most notably, Cozy Leaf, a woman’s hygiene product developer and manufactured in Japan for
                        global export.

                        An excellent partner in pageantry set up expertise, commercial shoots, and runway management.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
