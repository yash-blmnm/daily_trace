import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import GoalActionsForm from './GoalActionsForm';

type GoalFormProps = {
    
};

type GoalFormInputType = {
    title: string
    definition: string[]
    goalActionList: string[]
}

const GoalForm:React.FC<GoalFormProps> = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<GoalFormInputType>()

    const onSubmit: SubmitHandler<GoalFormInputType> = (data) => console.log(data)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, onChange: (value: string[]) => void) => {
        const value = e.target.value;
        onChange(value.split("\n"));
    };
    
    return <section>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Name your goal' {...register("title", {required: true})} />
            {/* {errors.title && <span>This field is required</span>} */}

            <Controller
                render={
                ({ field : { onChange, value, ...fieldValues }}) => <textarea placeholder='Describe your goal' value={value ? value.join("\n") : ""} onChange={(e) => handleChange(e, onChange)} {...fieldValues}/>
                }
                control={control}
                defaultValue={[]}
                name="definition"
            />
            {/* <input placeholder='Describe your goal' {...register("definition", { required: true })} />
            {errors.definition && <span>This field is required</span>} */}

            <Controller
                render={
                ({ field : { onChange, value, ...fieldValues }}) => <GoalActionsForm value={value} onChange={onChange} {...fieldValues} />
                }
                control={control}
                defaultValue={[]}
                name="goalActionList"
            />
            {/* <input placeholder='Describe your goal' {...register("definition", { required: true })} />
            {errors.definition && <span>This field is required</span>} */}


            <input className='' type="submit" value="Commit Goal"/>
        </form>
    </section>
}
export default GoalForm;