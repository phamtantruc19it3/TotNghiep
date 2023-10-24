public class StringHelper
{
    private string oriString;

    public StringHelper(string inputString)
    {
        oriString = inputString;
    }

    // Concatenates two strings
    public string Concat(string secString)
    {
        char[] rs = new char[oriString.Length + secString.Length];
        int i = 0;

        foreach (char c in oriString)
        {
            rs[i] = c;
            i++;
        }

        foreach (char c in secString)
        {
            rs[i] = c;
            i++;
        }

        return new string(rs);
    }

    // Retrieves a substring from the original string
    public string SubString(int start, int length)
    {
        if (startIndex < 0 || startIndex >= oriString.Length || length <= 0)
        {
            throw new Error("wrong index");
        }

        char[] rs = new char[length];
        for (int i = 0; i < length; i++)
        {
            rs[i] = oriString[startIndex + i];
        }

        return new string(rs);
    }

    // Removes duplicate characters from the string
    public string Distinct()
    {
        string distinctString = string.Empty;

        foreach (char c in oriString)
        {
            if (distinctString.IndexOf(c) == -1)
            {
                distinctString += c;
            }
        }

        return distinctString;
    }

    // Checks if the original string contains a specific substring
    public bool Contains(string subString)
    {
        int subStringLength = subString.Length;

        for (int i = 0; i <= oriString.Length - subStringLength; i++)
        {
            if (oriString.Substring(i, subStringLength) == subString)
            {
                return true;
            }
        }

        return false;
    }
}