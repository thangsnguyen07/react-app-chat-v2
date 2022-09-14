import { useEffect, useState } from "react";
import { getAuthUser } from "../services/auth";
import { User } from "../utils/interfaces";

export function useAuth() {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setTimeout(() => setLoading(false), 3000));

    return () => controller.abort();
  }, []);

  return { user, loading };
}
