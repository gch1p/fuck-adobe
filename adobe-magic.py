import json

from mitmproxy import http


def response(flow: http.HTTPFlow) -> None:
    if flow.request.path.startswith("/asnp/nud/v") and flow.response and flow.response.content:
        data = json.loads(flow.response.content)
        data['workflow'] = {}
        flow.response.text = json.dumps(data, separators=(',', ':'))