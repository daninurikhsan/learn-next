import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Author, Startup } from "@/sanity/types"

export type StartUpTypeCard = Omit<Startup, "author"> & { author?: Author }

const StartupCard = ({ post }: { post: StartUpTypeCard }) => {

    const { _createdAt, views, author, title, description, category, _id, image } = post

    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    { formatDate(_createdAt)}
                </p>

                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary"/>
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?.id}`}>
                        <p className="text-16-medium line-clamp-1">{author?.name}</p>
                    </Link>

                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>                    
                    </Link>
                </div>

                <Link href={`/user/${author?.id}`}>
                    <Image
                        src="https://placehold.co/48x48"
                        alt="placeholder"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">
                    {description}
                </p>

                <img
                    src={image}
                    alt="placholder"
                    className="startup-card_img"
                />

                <div className="flex-between gap-3 mt-5">
                    <Link href={`/?query=${category?.toLowerCase()}`}>
                        <p className="text-16-medium">{category}</p>
                    </Link>
                    <Button className="startup-card_btn">
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </Link>

        </li>
    )
}

export default StartupCard