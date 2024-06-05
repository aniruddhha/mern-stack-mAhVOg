export function MyTableItem({ sr, state, city }) {
    return (
        <tr>
            <td className="border border-slate-300 text-center">{sr}</td>
            <td className="border border-slate-300 text-left">{state}</td>
            <td className="border border-slate-300 text-left">{city}</td>
        </tr>
    )
}

export const MyTableV3 = () => {

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
                    {
                        // details.map( (dt, ind) => <MyTableItem sr={ind+1} state={dt.state} city={dt.city}  />)
                        details.map( (dt, ind) => <MyTableItem sr={ind+1} {...dt}  />)
                    }
                </tbody>
             </table>
        </div>
    )
}