import { AccountCircle, EmailRounded, GitHub} from "@mui/icons-material"

export default function About () {
    return (
        <div className="about">
            <div className=" grid-rows-2 bg-cyan-950 dark:bg-gray-900 w-full rounded-lg relative h-rounded-md">
                <div className="grid-rows-2 p-11 flex shrink">
                    <AccountCircle className="text-primary text-8xl"/>
                    <div className="flex flex-wrap shrink text-secondary">
                        <div className="lg:text-3xl sm:text-2xl mt-3 ms-4 shrink">Naveed SNR
                            <p className="mt-2 text-secondary text-xs ">Designer | Full Stack Developer</p>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}