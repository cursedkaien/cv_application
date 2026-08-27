export default function Section({
  children,
  title,
  isSubmitted,
  setIsSubmitted,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className={`section-container ${isSubmitted ? "cv-preview" : ""}`}>
      <h2>{title}</h2>

      {isSubmitted ? (
        <div className="section-submitted">
          {children}
          <button type="button" onClick={() => setIsSubmitted(false)}>
            Edit
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {children}
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}
