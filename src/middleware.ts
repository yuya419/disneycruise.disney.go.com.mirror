import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];
        const [user, password] = atob(authValue).split(":");

        // ユーザー名とパスワードを検証
        if (user === "red" && password === "red") {
            return NextResponse.next(); // 認証成功
        }
    }

    // 認証失敗時のレスポンス
    return new NextResponse("Authentication required", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
    });
}

// 適用するパスを指定
export const config = {
    matcher: ["/ships/adventure((?!/api|/_next/static|/_next/image|/favicon.ico).*)"], // basePathを考慮
};