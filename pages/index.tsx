import { NextPage } from 'next';
import { default as Layout } from '../components/page-layout.component';

const IndexPage: NextPage = () => {
  return (
    <Layout title="@lpbayliss Starter">
      <h1>
        <a href="https://github.com/lpbayliss">@lpbayliss</a> Starter Project
      </h1>
      <p>
        This is a NextJs application with Typescript, Emotion (styled
        components) and TailwindCSS macros
      </p>
    </Layout>
  );
};

export default IndexPage;
