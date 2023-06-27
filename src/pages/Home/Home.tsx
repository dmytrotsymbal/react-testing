type Props = {}
const Home = (props: Props) => {
    const arr = ['html', 'css', 'js']

    return (
        <div className="HomePage" data-testid="homePage">
            <h1 className="HomeTitle">UnitTest_1</h1>

            <ul>
                {arr.map((item) => (
                    <li style={{ color: 'red' }} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Home
