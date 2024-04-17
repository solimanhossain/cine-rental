import Image from "next/image";

export default function CartItem({ movie, onRemoveId }) {
    const { id, title, poster_path, vote_average } = movie;
    function handleRemoveMovie(e) {
        e.preventDefault();
        onRemoveId(id);
    }

    return (
        <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            <div className="grid grid-cols-[1fr_auto] gap-4">
                <div className="flex items-center gap-4">
                    <Image
                        className="rounded overflow-hidden w-auto h-auto"
                        src={poster_path}
                        alt="poster"
                        width={50}
                        height={50}
                    />
                    <div>
                        <h3 className="text-base md:text-2xl font-bold">
                            {title}
                        </h3>
                        <span className="max-md:text-xs">{vote_average}</span>
                    </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                    <button
                        onClick={handleRemoveMovie}
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    >
                        <Image
                            className="w-5 h-5"
                            src="/assets/svg/remove.svg"
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span className="max-md:hidden">Remove</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
