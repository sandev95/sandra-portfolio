import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/templates/Layout/Layout";
import { Box } from "../components/atoms/Box/Box";
import { Title } from "../components/atoms/Title/Title";
import { Description } from "../components/organisms/Description/Description";
import { Information } from "../components/organisms/Information/Information";

const IndexPage = () => {
  return (
    <Layout>
      <Box margin="100px 0 0 250px" maxWidth="900px">
        <Title />
        <Description />
        <Information />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
