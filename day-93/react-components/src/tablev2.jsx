
export function MyTableV2() {
    // data should come from an array

    const details = [
        { state: 'Indiana', city: 'Indianapolis' },
        { state: 'Ohio', city: 'Columbus' },
        { state: 'Michigan', city: 'Detroit' },
        { state: 'California', city: 'Los Angeles' },
        { state: 'Texas', city: 'Houston' },
        { state: 'Florida', city: 'Miami' },
        { state: 'New York', city: 'New York City' },
        { state: 'Illinois', city: 'Chicago' },
        { state: 'Pennsylvania', city: 'Philadelphia' },
        { state: 'Georgia', city: 'Atlanta' },
        { state: 'North Carolina', city: 'Charlotte' },
        { state: 'Washington', city: 'Seattle' },
        { state: 'Arizona', city: 'Phoenix' }
    ];

    function convertArrToTR() {
        const arr = []
        details.forEach(dt => {
            arr.push(
                <tr>
                    <td className="border border-slate-300 text-center">2</td>
                    <td className="border border-slate-300 text-left">{dt.state}</td>
                    <td className="border border-slate-300 text-left">{dt.city}</td>
                </tr>
            )
        })
        return arr
    }

    const convertArrToTrMap = () => details.map(({ state, city }) => (
        <tr>
            <td className="border border-slate-300 text-center">2</td>
            <td className="border border-slate-300 text-left">{state}</td>
            <td className="border border-slate-300 text-left">{city}</td>
        </tr>
    ))

    return (
        <div className="flex justify-center">
            <table class="border-collapse border border-slate-400 w-[25%]">
                <thead>
                    <tr>
                        <th class="border border-slate-300 bg-slate-100">Sr</th>
                        <th class="border border-slate-300 bg-slate-100 text-left">State</th>
                        <th class="border border-slate-300 bg-slate-100 text-left">City</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {convertArrToTR()} */}
                    {
                        convertArrToTrMap()
                    }
                </tbody>
            </table>
        </div>
    )

}