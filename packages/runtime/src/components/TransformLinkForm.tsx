const exampleProjectPath = `/Users/MyName/MyProject`; //`C://my-projects/my-project`;

export function TransformLinkForm(props: {
  // value: string;
  // onChange: (val: string) => void;
}) {
  return (
    <div class="py-2">
      <label
        for="project-path"
        class="block text-sm text-slate-700 pb-0.5 font-bold"
      >
        Transform
      </label>
      <div class="flex gap-2">
        <input
          id="project-path"
          value={""}
          onInput={(e) => {
            // props.onChange(e.currentTarget.value);
          }}
          placeholder={`from regex`}
          type="text"
          name="text"
          class={
            "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"
          }
        />
        <input
          id="project-path"
          value={""}
          onInput={(e) => {
            // props.onChange(e.currentTarget.value);
          }}
          placeholder={`to`}
          type="text"
          name="text"
          class={
            "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md"
          }
        />
      </div>

      <div class="text-xs text-slate-700 pt-2">
        You can try <code class="bg-slate-100 rounded py-1 px-2">pwd</code> or{" "}
        <code class="bg-slate-100 rounded py-1 px-2">echo %cd%</code> command to
        get the current path
      </div>
    </div>
  );
}