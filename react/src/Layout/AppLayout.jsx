import styled from "styled-components";
import Stats from "./Stats/Stats";
import Main from "./Main";
import SideBar from "./SideBar/SideBar";

const StyledAppLayout = styled.div`
    display: flex;
    height: 100dvh;
    width: 100%;
`;

function AppLayout() {
    return (
        <StyledAppLayout>
            <Stats />
            <Main />
            <SideBar />
        </StyledAppLayout>
    );
}

export default AppLayout;
