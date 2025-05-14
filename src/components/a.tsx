interface Props {
  label?: string;
}

const Test = ({ label }: Props) => <div>{label}</div>;

const Demo = () => (
  <>
    <Test />        {/* Should be fine */}
    <Test label="hi" />
  </>
);
