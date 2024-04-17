import add, { getNumbers, addArrayNumbers } from './calculator';

it("add test", () => {
    // add(1, 2);
    // 이제 내가 기대하는 결과 값이 나오면 성공이야!
    expect(add(1, 2)).toBe(3);
});

// test case 묶어버리기
describe("get number array and sum", () => {
    const getData = async () => {
        const response = await getNumbers();
        const responseData = await response.json();

        return responseData;
    }

    test("get numbers", async () => {
        const data = await getData();
        expect(data).toStrictEqual([1, 2, 3, 4, 5]); // 강력하게 확인하고 싶을 때
    });
    
    test("add array numbers", async () => {
        // const arr = [1, 2, 3];
        // expect(addArrayNumbers(arr)).toBe(6);
        
        const data = await getData();
        expect(addArrayNumbers(data)).toBe(15);
    });
});