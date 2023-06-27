import { useEffect, useState } from 'react'

type Props = {}
const TestComp = (props: Props) => {
    const [data, setData] = useState<null | any>(null)

    const [toggle, setToggle] = useState<boolean>(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    const [value, setValue] = useState<string>('')

    return (
        <div className="TestComp" data-testid="testComp">
            {data && <h6 style={{ color: 'red' }}>randomText</h6>}
            <h1>TestComp</h1>
            <button
                onClick={handleToggle}
                data-testid="toggleBtn"
                className="btn"
            >
                Click me!
            </button>
            {toggle === true && <h6 data-testid="toggleElement">toggle</h6>}

            <hr />
            <h3 data-testid="valueH3Element">{value}</h3>
            <input
                type="text"
                placeholder="Type here"
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}
export default TestComp
