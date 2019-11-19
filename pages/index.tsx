import { NextPage } from 'next';
import { PageLayout } from '../components';
import { withApollo } from '../utils/withApollo';

const IndexPage: NextPage = () => {
  return (
    <PageLayout title="@lpbayliss Starter">
      <h1>
        <a href="https://github.com/lpbayliss">@lpbayliss</a> Starter Project
      </h1>
      <p>
        This is a NextJs application with Typescript, Emotion (styled
        components) and TailwindCSS macros
      </p>
    </PageLayout>
  );
};

export default withApollo(IndexPage);
