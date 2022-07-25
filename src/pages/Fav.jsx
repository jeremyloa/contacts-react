import { useEffect } from "react"
// import { UseCurrAPI } from "../contexts/APIContext"
import { UseCurrFav } from "../contexts/FavContext"
import { Link } from "react-router-dom"
import axios from 'axios'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CollectionIcon,
  SearchIcon,
  SortAscendingIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { useState } from "react"

const navigation = [
  { name: 'Home', href: '/app/home', current: false },
  { name: 'Search', href: '/app/search', current: false },
  { name: 'Favorites', href: '/app/favorites', current: true }
]
const userNavigation = []

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// const api = UseCurrAPI()

export default function Fav(){
    let tempfav = [];
    if (localStorage.getItem('fav')) tempfav = JSON.parse(localStorage.getItem('fav'))
    const [fav, setFav] = useState(tempfav);
    console.log(fav)
    // if (!localStorage || !localStorage.getItem("fav")){
    //     setFav([1,3])
    // } else {
    //     console.log("tes")
    // }
    
    const [api, setApi] = useState();
    useEffect(() => {
        axios
        .get('https://reqres.in/api/users?page=1')
        .then((result)=>{
          console.log(result.data.data)
          setApi(result.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
        console.log(api)
      },[])
    // useEffect(() => {
    //     console.log(fav) 
    // }, [fav])
     
    // console.log(fav)
    // function goFav(id) {
    //     console.log("go fav id: " + id)
    //     if (fav && Array.isArray(fav)) {
    //         setFav(fav.concat([id]))
    //         console.log(fav)
    //     }
    // }
    
    // function goUnFav(id) {
    //     let tempfav = fav
    //     console.log("go unfav id: " + id)
    //     console.log("fav before delete: " + fav)
    //     console.log("index: " + fav.indexOf(id))
    //     if (fav && Array.isArray(fav) && fav.indexOf(id)>-1) {
    //         tempfav.splice(tempfav.indexOf(id), 1)
    //         console.log(tempfav)
    //         setFav(tempfav)
    //         console.log(fav)
    //     }
    // }

    const goFav = (id) => {
        let temp = [...fav]
        temp.push(id)
        localStorage.setItem('fav', JSON.stringify(temp))
        setFav(temp)
        console.log(temp)
    }

    const goUnFav = (id) => {
        let temp = [...fav]
        let idx = fav.indexOf(id)
        temp.splice(idx, 1)
        localStorage.setItem('fav', JSON.stringify(temp))
        setFav(temp)
        console.log(temp)
    }

    return(
        <>
        {/* Background color split screen for large screens */}
        <div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
        <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
        <div className="relative min-h-screen flex flex-col">
            {/* Navbar */}
            <Disclosure as="nav" className="flex-shrink-0 bg-indigo-600">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                    
                    {/* Logo section */}
                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                        <div className="flex-shrink-0">
                        <Link to={'/'} className="flex-1 text-lg font-medium text-white">JM22-1 Qualif ReactJS</Link>
                        </div>
                    </div>
                    
                    <div className="flex lg:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    {/* Links section */}
                    <div className="hidden lg:block lg:w-80">
                        <div className="flex items-center justify-end">
                        <div className="flex">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <Link
                        to={item.href}
                        key={item.name}
                        className={classNames(
                            item.current
                            ? 'text-white bg-indigo-800'
                            : 'text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Link>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

            {/* 3 column wrapper */}
            <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
            {/* Left sidebar & main wrapper */}
            <div className="flex-1 min-w-0 bg-white xl:flex">
                {/* Account profile */}
                <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                    <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                        {/* Profile */}
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0 h-12 w-12">
                            <img
                                className="h-12 w-12 rounded-full"
                                src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                                alt=""
                            />
                            </div>
                            <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-900">Jeremy Loa</div>
                            <a href="https://github.com/jeremyloa" className="group flex items-center space-x-2.5">
                                <svg
                                className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                />
                                </svg>
                                <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium">
                                jeremyloa
                                </span>
                            </a>
                            </div>
                        </div>
                        
                        </div>
                        {/* Meta info */}
                        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                        <div className="flex items-center space-x-2">
                            <BadgeCheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="text-sm text-gray-500 font-medium">Pro Member</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CollectionIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="text-sm text-gray-500 font-medium">8 Projects</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Fav Users List */}
                <div className="bg-white lg:min-w-0 lg:flex-1">
                        <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                            <div className="flex items-center">
                            <h1 className="flex-1 text-lg font-medium">Favorited Users</h1>
                            </div>
                        </div>
                        <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
                            {api && api.map((use) => ( fav && Array.isArray(fav) && fav.includes(use.id) &&
                            <li
                                key={use.id}
                                className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                            >
                                <div className="flex items-center justify-between space-x-4">
                                <div className="min-w-0 space-y-3">
                                    <div className="flex items-center space-x-3">
                                    

                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={use.avatar}
                                        alt=""
                                    />
                                    <span className="block">
                                        <h2 className="text-sm font-medium">
                                        <Link to={`/app/detail/${use.id}`}>
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {use.first_name}{' '}{use.last_name}
                                        </Link>
                                        </h2>
                                        <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                                            {use.email}
                                        </span>
                                    </span>
                                    </div>
                                    <div className="relative group flex items-center space-x-2.5">
                                    
                                    </div>
                                </div>
                                
                                <div>
                                    <button
                                        className="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        type="button"
                                        onClick={(e)=>goUnFav(use.id)}
                                        >
                                        <StarIcon
                                        className={'text-yellow-300 hover:text-yellow-400 h-5 w-5'}
                                        aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                        </div>
                        
            </div>
            </div>
        </div>
        </>
    )
}   