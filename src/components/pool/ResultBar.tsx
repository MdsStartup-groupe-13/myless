interface ResultBarProps {
    percentage: number
    color?: string
}

export function ResultBar({ percentage, color = "bg-black" }: ResultBarProps) {
    return (
        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
            <div
                className={`h-full ${color} transition-all duration-500 ease-out`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    )
}