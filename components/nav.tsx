import Link from "next/link"

export const Nav = () =>{
    return(
        <div className="shadow">
            <ul className="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-end">
                <li><Link href={"/"}>home</Link></li>
                <li><Link href={"/shop"}>shop</Link></li>
                <li><Link href={"/pay"}>pay</Link></li>
            </ul>
        </div>
    )
}