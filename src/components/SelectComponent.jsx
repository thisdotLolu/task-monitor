'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {FaChevronDown} from 'react-icons/fa'
import clsx from 'clsx'

export default function SelectComponent({label,list,containerClassName,listButtonClassName,listOptionsClassName,selected,setSelected}) {
  return (
    <div className={clsx("w-full",containerClassName)}>
    <p className='text-[0.9rem]'>{label}</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative bg-transparent">
          <Listbox.Button className={clsx("relative w-full cursor-default text-white rounded-lg bg-transparent pr-10 text-left border h-[40px] p-3 border-[#D0D5DD] sm:text-sm",listButtonClassName)}>
            <span className="block truncate">{selected.listItem}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FaChevronDown/>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={clsx("p-2 max-h-[300px] h-fit absolute overflow-y-scroll mt-1 w-full overflow-auto rounded-md bg-black text-base ring-1 ring-black/5 focus:outline-none sm:text-sm",listOptionsClassName)}>
              {list.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none p-2  ${
                      active ? 'bg-[rgba(255,255,255,0.6)] text-white cursor-pointer' : 'text-white'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.listItem}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}