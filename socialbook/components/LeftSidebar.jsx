import React from "react"




function LeftSidebar (){
    return(
        <div className="LeftSidebarContainer ml-8 sticky my-4" >
           <ul className="">
            <li><a href="#" className="flex gap-4 items-center mb-4"><img className="w-6" src="/images/news.png" alt="news" /><span>Latest News</span></a></li>
            <li><a href="#" className="flex gap-4 items-center mb-4"><img className="w-6" src="/images/friends.png" alt="friends" /><span>Friends</span></a></li>
            <li><a href="#" className="flex gap-4 items-center mb-4"><img className="w-6" src="/images/group.png" alt="group" /><span>Group</span></a></li>
            <li><a href="#" className="flex gap-4 items-center mb-4"><img className="w-6" src="/images/marketplace.png" alt="marketplace" /><span>Marketplace</span></a></li>
            <li><a href="#" className="flex gap-4 items-center mb-4"><img className="w-6" src="/images/watch.png" alt="watch" /><span>Watch</span></a></li>
           </ul>
           <a href="#" className="text-lg text-[#1876f2]">See More</a>
           <hr className="h-1 bg-gray-300 my-6 text-sm "/>
           <p className="mb-4 text-lg font-medium text-gray-500">Your Shortcuts</p>
           <ul>
                <li className="mb-4">
                    <a href="#" className="flex"><img className="w-10 mr-4 rounded-lg" src="/images/shortcut-1.png" alt="link" />
                        <p>Web Developers</p>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex"><img className="w-10 mr-4 rounded-lg" src="/images/shortcut-2.png" alt="link" />
                        <p>Web Design course</p>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex"><img className="w-10 mr-4 rounded-lg" src="/images/shortcut-3.png" alt="link" />
                        <p>Full Stack Development</p>
                    </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="flex"><img className="w-10 mr-4 rounded-lg" src="/images/shortcut-4.png" alt="link" />
                        <p>Website Experts</p>
                    </a>
                </li>
           </ul>
        </div>
    )
}


export default LeftSidebar