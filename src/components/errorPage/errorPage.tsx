import { Stack, Typography } from "@mui/material";

export default function ErrorPage() {
    return (
        <>
            <Stack alignItems={"center"} justifyContent={"center"} display={"flex"} height={"100vh"}>
                <Typography variant={"h4"} component={"h1"}>
                    Oops!
                </Typography>
                <Typography variant="h6" component={"h4"}>
                    Sorry, an unexpected error has ocured.
                </Typography>
                <Typography variant="h6" component={"h5"} sx={{ color: "#54656f" }}>
                    Not Found
                </Typography>
            </Stack>
        </>
    )
}