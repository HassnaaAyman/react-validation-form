import { useEffect, useState, useCallback } from "react";

export const useValidator = (rules: any, value: any) => {
  const [errors, setErrors] = useState<any>([]);
  const [passes, setPasses] = useState(false);

  const validateRule = useCallback((field: string, rule: any) => {
      const ruleExecution = rule(field, value);
      if (!ruleExecution.passess()) {
        if (!errors.find((error: string) => ruleExecution.message() === error)) {
            setErrors((prevErrors: any) => [...prevErrors, ruleExecution.message()])
        }
      } else {
          console.log("here")
          setErrors([])
        //   if (!errors.length) {
        //       setPasses(true);
        //   }
      }
  }, []);
  
  useEffect(() => {
    for ( const [key, validationRules] of Object.entries(rules) ) {
        (validationRules as Array<Function>).forEach((rule: Function) => {
            if (!errors.length) {
                validateRule(key, rule);
            }
        });
    }
  }, [rules]);

  return [passes, errors];
};
