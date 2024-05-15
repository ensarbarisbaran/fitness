import React from 'react'

function Navbar() {


    return (

        <body class="bg-cyan-400">
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <nav class="p-5 bg-white shadow md:flex md:items-center md: justify-between">
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-[Poppins] cursor-pointer">
                        <img class="h-10 inline"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s" />
                        tailwind

                    </span>




                    <span class="text-3xl cursor-pointer mx-2 md:hidden block">
                        <ion-icon name="menu" ></ion-icon>
                    </span>
                </div>

                <ul class="md:flex md: items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-o py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li class="mx-4 my-6  md:my-0">
                        <a href="#" class="text-x1 hover:text-cyan-500 duration-500">Home</a>
                    </li>

                    <li class="mx-4 my-6  md:my-0">
                        <a href="#" class="text-x1 hover:text-cyan-500 duration-500">Service</a>
                    </li>

                    <li class="mx-4 my-6  md:my-0">
                        <a href="#" class="text-x1 hover:text-cyan-500 duration-500">Contact</a>
                    </li>

                    <li class="mx-4 my-6  md:my-0">
                        <a href="#" class="text-x1 hover:text-cyan-500 duration-500">Blog</a>
                    </li>
                    <h2 class=""></h2>

                </ul>
            </nav>


        </body>

    )
}

export default Navbar