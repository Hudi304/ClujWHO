type ApplyNowButtonBarProp = {
  setChair: (bool: boolean) => void
  setDelegate: (bool: boolean) => void
  className?: string
}

export function ApplyNowButtonBar({
  setChair,
  setDelegate,
  className
}: ApplyNowButtonBarProp): JSX.Element {
  return (
    <div className={`button-bar ${className}`}>
      <button
        className="form-btn"
        onClick={() => {
          setChair(true)
          setDelegate(false)
        }}
      >
        Chair
      </button>
      <button
        className="form-btn"
        onClick={() => {
          setChair(false)
          setDelegate(true)
        }}
      >
        Delegate
      </button>
    </div>
  )
}
