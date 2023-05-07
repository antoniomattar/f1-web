/* eslint-disable jsx-a11y/anchor-is-valid */
import f1logo from '../assets/logo.jpeg';
import React from 'react';
import Divider from './Divider';


export default function Menu() {
  function menuToggle() {
    const menu = document.querySelector("#menu-toggle");
    menu.classList.toggle("hidden");
    }

  return (
      <nav class="border-b border-gray-200 px-2">
        <div class="mx-auto flex max-w-screen-xl flex-wrap justify-center p-4">
          <a href="./" class="flex items-center">
            <img src={f1logo} class=" mr-3  h-11" alt="F1 Logo" />
          </a>
          <div class="flex md:order-2">
            <button
              onClick={menuToggle}
              id='menu-button'
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                <a
                  href="./"
                  class="block rounded bg-red-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-red-700 md:dark:text-red-500"
                  aria-current="page"
                >
                  Home 🏎️
                </a>
              </li>
              <li>
                <a
                  href="./archive"
                  class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                >
                  Archives
                </a>
              </li>
              <li>
                <a
                  href="./about"
                  class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-red-700"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden w-full md:items-center md:w-auto text-center" id="menu-toggle">
          <Divider/>
          <ul
            class="
              pt-2
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a class="md:p-4 py-2 block hover:text-red-700" href="./"
                >Home 🏎️</a>
              
            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-red-700" href="./archive"
                >Archives</a>

            </li>
            <li>
              <a class="md:p-4 py-2 block hover:text-red-700" href="./about"
                >About</a>
              
            </li>
          </ul>
        </div>
        
      </nav>
  );
};