import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import Home from 'pages/Home/Home'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import TestComp from 'Components/TestComp/TestComp'
import UsersList from 'Components/UsersList/UsersList'
import ErrorPage from 'pages/ErrorPage/ErrorPage'
import UserIniquePage from 'pages/UserUniquePage/UserIniquePage'

type Props = {}

function App(props: Props) {
    return (
        <>
            <CssBaseline />
            <Container sx={{ padding: '20px, 0' }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<TestComp />} />
                    <Route path="/users" element={<UsersList />} />
                    <Route
                        path="/usersUnique/:id"
                        element={<UserIniquePage />}
                    />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <hr />
                <Footer />
            </Container>
        </>
    )
}

export default App
