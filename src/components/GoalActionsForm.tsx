import React, { useState } from 'react';

type GoalActionsFormProps = {
    value: string[]
    onChange: (value: string[]) => void
};

const GoalActionsForm:React.FC<GoalActionsFormProps> = ({ value, onChange }) => {

    const [goalActionItem, setGoalActionItem] = useState<string>('');

    const goalActionItemUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if(e.ke === "") {
            setGoalActionItem(e.target.value);
        // }
    }

    const submitGoalActionItem = () => {
        onChange([...value, goalActionItem]);
        setGoalActionItem('');
    }
    
    return <div>
        {value ? 
            value.map((action, index) => (
                <div className="flex flex-row" key={index}>
                    <div>{action}</div>
                    <button onClick={() => onChange(value.filter((_, i) => i !== index))}>X</button>
                </div>
            )) 
        : 
            ''
        }
        <div>
            <input placeholder='Enter to save action' onChange={goalActionItemUpdate} onKeyDown={(e) => e.key === 'Enter' && submitGoalActionItem()} value={goalActionItem}/>
            <button onClick={submitGoalActionItem}>Add</button>
        </div>
    </div>
}
export default GoalActionsForm;