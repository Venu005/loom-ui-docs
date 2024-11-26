import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Heading } from "fumadocs-ui/components/heading";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";
import NLogo from "@/components/NLogo";
import VLogo from "@/components/VLogo";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { PreviewWithCode, Preview } from "@/components/PreviewWithCode";
import { Button } from "@/components/loomui/Button";
import dynamic from "next/dynamic";

const ClientOnlyCard = dynamic(
  () => import("../../../extra-ssr/ClientOnlyCard")
);
import {
  LoomCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/loomui/Card";
export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            NLogo,
            VLogo,
            Accordion,
            Accordions,
            Step,
            Steps,
            File,
            Folder,
            Files,
            PreviewWithCode,
            Preview,
            Button,
            LoomCard,
            CardHeader,
            CardTitle,
            CardDescription,
            CardContent,
            CardFooter,
            ClientOnlyCard,
            h1: (props) => <Heading as="h1" {...props} />,
            h2: (props) => <Heading as="h2" {...props} />,
            h3: (props) => <Heading as="h3" {...props} />,
            h4: (props) => <Heading as="h4" {...props} />,
            h5: (props) => <Heading as="h5" {...props} />,
            h6: (props) => <Heading as="h6" {...props} />,
            pre: ({ ref: _ref, ...props }) => (
              <CodeBlock keepBackground {...props}>
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
