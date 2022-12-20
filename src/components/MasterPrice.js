const MasterPrice = () => {
    return (
        <>
            <div className="shadow">
                <h1 className="max-w-[1240px] mx-auto font-bold text-3xl p-1">Master Price</h1>
            </div>
            <div className="max-w-[1240px] mx-auto ">
                <div className=" flex justify-center gap-5 text-center font-semibold text-[15px] py-[25px]">
                    <tr className=" border border-indigo-900 grid grid-cols-3 cursor-pointer">
                        <td>Round Trip</td>
                        <td className=" bg-indigo-900 text-white w-[120px]">One Way</td>
                        <td>Multi City</td>
                    </tr>
                </div>
                <hr className="border-1 border-indigo-500" />
                <div className="md:flex justify-between py-[13px] text-[18px]">
                    <input className="border border-neutral-900 h-9 w-[150px] p-3" type="text" placeholder="From" />
                    <input className="border border-neutral-900 h-9 w-[150px] p-3" type="text" placeholder="To" />
                    <input className="border border-neutral-900 h-9 w-[150px] p-2" type="date" />
                    <select className="border border-neutral-900 h-9 w-[110px] p-">
                        <option value="day">Day -</option>
                        <option value="1">1</option>
                    </select>
                    <select className="border border-neutral-900 h-9 w-[110px] p-1">
                        <option value="day+">Day +</option>
                        <option value="1">1</option>
                    </select>
                    <select className="border border-neutral-900 h-9 w-[200px] p-1">
                        <option value="any-time">Any time</option>
                        <option value="1">Later</option>
                    </select>
                    <span className="font-bold">+</span>
                    <select className="border border-neutral-900 h-9 w-[120px] p-1">
                        <option value="adt">ADT</option>
                        <option value="chl">CHL</option>
                        <option value="inf">INF</option>
                    </select>
                    <select className="border border-neutral-900 h-9 w-[120px] p-1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <span className="font-bold">+</span>
                </div>
                <hr className="border-1 border-indigo-500" />
                <div className="flex justify-between py-[13px] text-[18px] font-bold item">
                    <div className="flex items-center sm:gap-3">
                        <input type="checkbox" name="" id="" />
                        <label>Extra Option</label>
                    </div>
                    <form className="flex items-center sm:gap-3">
                        <label>Environment</label>
                        <input type="radio" name="Environment" value="Dummy"/>
                        <label> Dummy </label>
                        <input type="radio" name="Environment" value="PDT"/>
                        <label> PDT </label>
                    </form>
                    <div>
                        <button className="bg-indigo-900 hover:bg-[#04266f] text-white h-9 w-[100px] rounded-md text-[14px] font-normal" type="submit">SEARCH</button>
                    </div>
                </div>
                <hr className="border-1 border-indigo-500" />
            </div>
        </>
    )
}

export default MasterPrice;