export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full flex font-mont ${className}`}>
      {children}
    </div>
  );
}