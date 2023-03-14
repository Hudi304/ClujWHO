type RegistrationFormsProps = {
  chair: boolean
  delegate: boolean
  className?: string
}

export function WebApplyNowTitle({
  chair,
  delegate,
  className
}: RegistrationFormsProps): JSX.Element {
  return (
    <div className={`apply-now-title-container ${className}`}>
      {!chair && !delegate ? (
        <p className="titleContainer xOyCenter">
          The experience of your studenthood starts in:
        </p>
      ) : null}

      {chair ? (
        <p className="titleContainer xOyCenter">Chair Registration ends in:</p>
      ) : null}

      {delegate ? (
        <p className="titleContainer xOyCenter">
          Delegates Registration ends in:
        </p>
      ) : null}
    </div>
  )
}
