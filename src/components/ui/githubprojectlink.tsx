import { IconBrandGithub } from "@tabler/icons-react";

const GithubLink = ({ github_link }: { github_link: string }) => {
  return (
    <>
      <a href={github_link} className="cursor-pointer">
        <IconBrandGithub className="h-5 w-5  text-neutral-500" />
      </a>
    </>
  );
};

export default GithubLink;
