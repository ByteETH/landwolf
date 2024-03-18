export default function Divider() {
  return (
    <>
      <div className="dividerContainer"></div>

      <style jsx>{`
        .dividerContainer {
          width: 100%;
          height: 2px;
          background-color: white;
        }
      `}</style>
    </>
  );
}
