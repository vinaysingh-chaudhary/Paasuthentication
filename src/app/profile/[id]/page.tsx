const userPage = ({params}: any) => {
    return (
        <div className=" flex justify-center items-center w-screen h-screen gap-1 flex-col">
            <h1 className=" text-4xl">Profile of</h1>
            <h1 className=" text-4xl">{params.id}</h1>
        </div>
    )
}

export default userPage;