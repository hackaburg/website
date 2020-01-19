import { graphql, useStaticQuery } from "gatsby";

interface IQueryResult {
  allFile: {
    nodes: ReadonlyArray<{
      publicURL: string;
      relativePath: string;
    }>;
  };
}

export const usePublicFileURL = (filename: string): string | undefined => {
  const { allFile } = useStaticQuery<IQueryResult>(
    graphql`
      query ImageQuery {
        allFile {
          nodes {
            publicURL
            relativePath
          }
        }
      }
    `,
  );

  const image = allFile.nodes.find((file) => file.relativePath === filename);
  return image?.publicURL;
};
