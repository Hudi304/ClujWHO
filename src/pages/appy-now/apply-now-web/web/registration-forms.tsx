type RegistrationFormsProps = {
  chair: boolean
  delegate: boolean
  className?: string
}

export function WebRegistrationForms({
  chair,
  delegate,
  className
}: RegistrationFormsProps): JSX.Element {
  return (
    <div className={`paperContainer OxCenter ${className}`}>
      <div className="iframeContainer OxCenter">
        {chair ? (
          <div className="container-form-mobile OxCenter">
            <div className="iframe-container-mobile OxCenter">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScjPbjWOtO4-cPVf-83h4NuuNeGqZ4LmOl393lEC-J79c1f-Q/viewform?embedded=true"
                width="100%"
                className="iframe"
              >
                Loading…
              </iframe>
            </div>
          </div>
        ) : null}

        {delegate ? (
          <div>
            <div className="container-form-mobile OxCenter">
              <div className="iframe-container-mobile OxCenter">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScj6xGbjMMttGS2VwbbEkUZ9tTWLpOIRFJTexjN1k9jhFtD7A/viewform?embedded=true"
                  width="100%"
                  className="iframe"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
