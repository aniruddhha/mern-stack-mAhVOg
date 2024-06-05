export function MyTableV1() {

    // static data
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
                    <tr>
                        <td class="border border-slate-300 text-center">1</td>
                        <td class="border border-slate-300 text-left">Indiana</td>
                        <td class="border border-slate-300 text-left">Indianapolis</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 text-center">2</td>
                        <td class="border border-slate-300 text-left">Ohio</td>
                        <td class="border border-slate-300 text-left">Columbus</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 text-center">3</td>
                        <td class="border border-slate-300 text-left">Michigan</td>
                        <td class="border border-slate-300 text-left">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
