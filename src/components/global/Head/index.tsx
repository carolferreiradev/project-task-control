import NextHead from "next/head";

export interface Props {
  name: string;
}
export function Head(props: Props) {
  const { name } = props;
  return (
    <NextHead>
      <title>{name} - TaskControl</title>
    </NextHead>
  );
}
