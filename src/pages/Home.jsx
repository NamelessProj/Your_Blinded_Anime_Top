import {Alert, Button, Card, CardBody, Input} from "@material-tailwind/react";
import {useContext, useState} from "react";
import DataContext from "../context/DataContext.jsx";

const Home = () => {
    const {username, setUsername} = useContext(DataContext);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if(!username || username === ""){
            setError("Please enter your Anilist username.");
            document.querySelector("input[name='username']").focus();
            return;
        }
    }

    return (
        <main className="flex justify-center items-center">
            <Card className="w-[min(450px,100%)]">
                <CardBody>
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        {error && <Alert color="red">{error}</Alert>}
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            label="Your Anilist username"
                            variant="standard"
                            color="deep-orange"
                            name="username"
                            autoFocus
                        />
                        <Button
                            color="deep-orange"
                            variant="gradient"
                            onClick={handleSubmit}
                        >
                            To the Blinded Top
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </main>
    );
};

export default Home;