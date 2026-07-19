export default function Section({
  enabled = true,
  children,
}) {
  if (!enabled) {
    return null;
  }

  return children;
}