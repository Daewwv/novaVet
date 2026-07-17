import Reveal from "./Reveal";

export default function Section({
  enabled = true,
  animate = true,
  children,
}) {
  if (!enabled) {
    return null;
  }

  if (!animate) {
    return children;
  }

  return <Reveal>{children}</Reveal>;
}