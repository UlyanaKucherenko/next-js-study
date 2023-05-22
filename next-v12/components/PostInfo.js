import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { id, title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h2" text={`Post #${id}`} />
      <h3>{title}</h3>
      <p>{body}</p>
    </>
  );
}

export default PostInfo;